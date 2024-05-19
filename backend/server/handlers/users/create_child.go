package users

import "github.com/gofiber/fiber/v2"

type createChildRequest struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	FamilyId  string `json:"family_id"`
}

func (u *UserHandler) CreateChild() fiber.Handler {
	return func(c *fiber.Ctx) error {
		// Parse the request body into the child struct
		var child createChildRequest
		if err := c.BodyParser(&child); err != nil {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": err.Error(),
			})
		}

		if child.FirstName == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "first_name is required",
			})
		}

		if child.LastName == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "last_name is required",
			})
		}

		if child.Email == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "email is required",
			})
		}

		if child.Password == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "password is required",
			})
		}

		if child.FamilyId == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "family_id is required",
			})
		}

		if err := u.app.CreateChild(
			child.FirstName,
			child.LastName,
			child.Email,
			child.Password,
			child.FamilyId,
		); err != nil {
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
