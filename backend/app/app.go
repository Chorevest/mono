package app

type Database interface {
	CreateChore(parentId, childId, task string, payout int64) error
	UpdateChore() error
	GetAllChores() error

	CreateParent(firstName, lastName, email, password, familyId string) error
	CreateChild(firstName, lastName, email, password, familyId string) error
}

type App struct {
	db Database
}

func New(db Database) *App {
	return &App{
		db: db,
	}
}
