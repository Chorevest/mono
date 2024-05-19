package chores

import "github.com/gofiber/fiber/v2"

type createChoreRequest struct {
	ParentId string `json:"parent_id"`
	ChildId  string `json:"child_id"`
	Task     string `json:"task"`
	Payout   int64  `json:"payout"`
}

func (ch *ChoreHandler) CreateChore() fiber.Handler {
	return func(c *fiber.Ctx) error {

		var req createChoreRequest
		if err := c.BodyParser(&req); err != nil {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": err.Error(),
			})
		}

		if req.ParentId == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "parent_id is required",
			})
		}

		if req.Task == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "task is required",
			})
		}

		err := ch.app.CreateChore(req.ParentId, req.ChildId, req.Task, req.Payout)
		if err != nil {
			c.Status(fiber.StatusInternalServerError)
			return c.JSON(fiber.Map{
				"error": err.Error(),
			})

		}

		c.Status(fiber.StatusCreated)
		return c.JSON(fiber.Map{
			"error": "",
		})
	}
}
