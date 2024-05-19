package app

// CreateParent creates a new parent record in the database.
// If the familyId is empty, a new family is generated.
func (a *App) CreateParent(firstName, lastName, email, password, familyId string) error {
	return a.db.CreateParent(firstName, lastName, email, password, familyId)
}

// CreateChild creates a new child record in the database.
// The child record is associated with the parent's familyId.
func (a *App) CreateChild(firstName, lastName, email, password, familyId string) error {
	return a.db.CreateChild(firstName, lastName, email, password, familyId)
}
