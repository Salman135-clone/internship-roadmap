package main

import (
	"go-gin-api/routes"

	"github.com/gin-gonic/gin"
)

// type Users struct {
// 	ID    int    `json:"id"`
// 	Name  string `json:"name"`
// 	Value string `json:"value"`
// }

// var mockData = []Users{
// 	{ID: 1, Name: "Item A", Value: "Val 1"},
// 	{ID: 2, Name: "Item B", Value: "Val 2"},
// 	{ID: 3, Name: "Item C", Value: "Val 3"},
// 	{ID: 4, Name: "Item D", Value: "Val 4"},
// 	{ID: 5, Name: "Item E", Value: "Val 5"},
// 	{ID: 6, Name: "Item F", Value: "Val 6"},
// 	{ID: 7, Name: "Item G", Value: "Val 7"},
// }

func main() {
	router := gin.Default()
	routes.UserRoute(router)
	router.Run(":8080")

	// router.GET("/ping", func(c *gin.Context) {
	// 	c.JSON(200, gin.H{
	// 		"data":    mockData,
	// 		"message": "Fetch Successfully",
	// 	})
	// })
	// router.POST("/user", func(c *gin.Context) {
	// 	c.JSON(201, gin.H{
	// 		"message": "Created Successfully",
	// 		"status":  "Success",
	// 	})
	// })

}
