package db

type chore struct {
	Id        string `gorm:"primaryKey"`
	ParentId  string
	ChildId   string
	Task      string
	Payout    int64
	Active    bool
	CreatedAt int64 `gorm:"autoCreateTime:milli"`
	UpdatedAt int64 `gorm:"autoUpdateTime:milli"`
	DeletedAt int64
}

type parent struct {
	Id        string `gorm:"primaryKey"`
	FamilyId  string
	FirstName string
	LastName  string
	Email     string
	Password  string
	CreatedAt int64 `gorm:"autoCreateTime:milli"`
	UpdatedAt int64 `gorm:"autoUpdateTime:milli"`
	DeletedAt int64
}

type child struct {
	Id        string `gorm:"primaryKey"`
	FamilyId  string
	FirstName string
	LastName  string
	Email     string
	Password  string
	CreatedAt int64 `gorm:"autoCreateTime:milli"`
	UpdatedAt int64 `gorm:"autoUpdateTime:milli"`
	DeletedAt int64
}
