package db

import "github.com/google/uuid"

func (d *Database) CreateChore(parentId, childId, task string, payout int64) error {
	chore := &chore{
		Id:       uuid.New().String(),
		ParentId: parentId,
		ChildId:  childId,
		Task:     task,
		Payout:   payout,
		Active:   true,
	}
	result := d.conn.Create(chore)
	return result.Error
}

func (d *Database) UpdateChore() error {
	return nil
}

func (d *Database) GetAllChores() error {
	return nil
}
