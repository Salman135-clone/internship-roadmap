package services

import (
	"fmt"
	"go-gin-api/models"
)

var storedUser []models.Users

func CreateUser(name string, age int) []models.Users {
	storedUser = append(storedUser, models.Users{
		Name: name,
		Age:  age,
	})
	return storedUser
}
func UpdateUser(age int, name string) (*models.Users, error) {
	for i := range storedUser {
		if storedUser[i].Age == age {
			storedUser[i].Name = name
			return &storedUser[i], nil
		}
	}
	return nil, fmt.Errorf("user not found")

}

func GetAllUser() []models.Users {
	return storedUser
}
