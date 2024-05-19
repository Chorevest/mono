package users

import "github.com/gofiber/fiber/v2"

type createParentRequest struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	FamilyId  string `json:"family_id"`
}

func (u *UserHandler) CreateParent() fiber.Handler {
	return func(c *fiber.Ctx) error {
		// Parse the request body into the parent struct
		var parent createParentRequest
		if err := c.BodyParser(&parent); err != nil {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": err.Error(),
			})
		}

		if parent.FirstName == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "first_name is required",
			})
		}

		if parent.LastName == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "last_name is required",
			})
		}

		if parent.Email == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "email is required",
			})
		}

		if parent.Password == "" {
			c.Status(fiber.StatusBadRequest)
			return c.JSON(fiber.Map{
				"error": "password is required",
			})
		}

		if err := u.app.CreateParent(
			parent.FirstName,
			parent.LastName,
			parent.Email,
			parent.Password,
			parent.FamilyId,
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
