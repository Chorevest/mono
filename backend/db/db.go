package db

import "gorm.io/gorm"

type Database struct {
	conn *gorm.DB
}

func NewDatabase(conn *gorm.DB) *Database {
	return &Database{
		conn: conn,
	}
}

// MigrateAll migrates all tables.
// This is used for testing purposes when spinning
// up a new database.
func (d *Database) MigrateAll() error {
	return d.conn.AutoMigrate(
		chore{},
		parent{},
		child{},
	)
}
