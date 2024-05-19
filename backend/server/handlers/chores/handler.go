package chores

import (
	"github.com/gofiber/fiber/v2"
)

type App interface {
	CreateChore(parentId, childId, name string, payout int64) error
	UpdateChore() error
	GetAllChores() error
}

type ChoreHandler struct {
	app App
}

func NewChoreHandler(a App) *ChoreHandler {
	return &ChoreHandler{
		app: a,
	}
}

func (ch *ChoreHandler) UpdateChore() fiber.Handler {
	return func(c *fiber.Ctx) error {
		return ch.app.UpdateChore()
	}
}

func (ch *ChoreHandler) GetAllChores() fiber.Handler {
	return func(c *fiber.Ctx) error {
		return ch.app.GetAllChores()
	}
}
