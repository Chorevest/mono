package users

type App interface {
	CreateParent(firstName, lastName, email, password, familyId string) error
	CreateChild(firstName, lastName, email, password, familyId string) error
}

type UserHandler struct {
	app App
}

func NewUserHandler(a App) *UserHandler {
	return &UserHandler{
		app: a,
	}
}
