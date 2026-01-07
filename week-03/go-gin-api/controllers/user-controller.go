package controllers

import (
	"go-gin-api/models"
	"go-gin-api/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	var input models.Users
	c.BindJSON(&input)
	user := services.CreateUser(input.Name, input.Age)
	c.JSON(201, gin.H{
		"message": "User Created Successfully",
		"user":    user,
	})
}

func GetAllUser(c *gin.Context) {
	user := services.GetAllUser()
	c.JSON(200, gin.H{
		"user": user,
	})
}

func UpdateUser(c *gin.Context) {
	age := c.Param("age")
	ageInt, err := strconv.Atoi(age)
	if err != nil {
		c.JSON(400, gin.H{
			"error": "Invalid age parameter"})
		return
	}
	var input struct {
		Name string `json:"name"`
	}
	c.BindJSON(&input)
	user, err := services.UpdateUser(ageInt, input.Name)
	if err != nil {
		c.JSON(404, gin.H{
			"error": "Fail to update user",
		})
		return
	}
	c.JSON(200, gin.H{
		"message": "Update Successfully",
		"user":    user,
	})
}
