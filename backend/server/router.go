package server

import (
	"github.com/gofiber/fiber/v2"
)

type ChoreHandler interface {
	CreateChore() fiber.Handler
}

type UserHandler interface {
	CreateParent() fiber.Handler
	CreateChild() fiber.Handler
}

type Router struct {
	app fiber.Router
	ch  ChoreHandler
	uh  UserHandler
}

func NewRouter(app fiber.Router, choreHandler ChoreHandler, userHandler UserHandler) *Router {
	return &Router{
		app: app,
		ch:  choreHandler,
		uh:  userHandler,
	}
}

func (r *Router) RouteChores() {
	v1Group := r.app.Group("/v1")

	v1Group.Post("/chores", r.ch.CreateChore())
}

func (r *Router) RouteUsers() {
	v1Group := r.app.Group("/v1")

	v1Group.Post("/users/parent", r.uh.CreateParent())
	v1Group.Post("/users/child", r.uh.CreateChild())
}
