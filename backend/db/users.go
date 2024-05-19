package db

import "github.com/google/uuid"

func (d *Database) CreateParent(firstName, lastName, email, password, familyId string) error {

	// If familyId is empty, generate a new family.
	if familyId == "" {
		familyId = uuid.New().String()
	}

	parent := &parent{
		Id:        uuid.New().String(),
		FirstName: firstName,
		LastName:  lastName,
		Email:     email,
		Password:  password,
		FamilyId:  familyId,
	}
	result := d.conn.Create(parent)
	return result.Error
}

func (d *Database) CreateChild(firstName, lastName, email, password, familyId string) error {
	child := &child{
		Id:        uuid.New().String(),
		FirstName: firstName,
		LastName:  lastName,
		Email:     email,
		Password:  password,
		FamilyId:  familyId,
	}
	result := d.conn.Create(child)
	return result.Error
}
