package app

// CreateChore creates a new chore record in the database.
func (a *App) CreateChore(parentId, childId, task string, payout int64) error {
	return a.db.CreateChore(parentId, childId, task, payout)
}

func (a *App) GetAllChores() error {
	return a.db.GetAllChores()
}

func (a *App) UpdateChore() error {
	return a.db.UpdateChore()
}
