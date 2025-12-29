package routes

import (
	"go-gin-api/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine) {
	router.POST("/user", controllers.CreateUser)
	router.GET("/user", controllers.GetAllUser)
	router.PATCH("/user/:age", controllers.UpdateUser)
}
