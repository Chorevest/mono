package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/requestid"

	"chorevest.com/backend/server/handlers/chores"
	"chorevest.com/backend/server/handlers/users"

	"chorevest.com/backend/app"
	"chorevest.com/backend/db"

	routes "chorevest.com/backend/server"
)

func main() {

	// // Seed data
	// if os.Getenv("SEED_DB") == "true" {
	// 	if err := seed.SeedDB(dbConn); err != nil {
	// 		panic(err)
	// 	}
	// }

	// Database
	dbConn, err := db.NewConnFromEnv()
	if err != nil {
		panic(err)
	}
	database := db.NewDatabase(dbConn)

	// Used for local development
	if os.Getenv("MIGRATE_DB") == "true" {
		if err := database.MigrateAll(); err != nil {
			panic(err)
		}
	}

	// App
	app := app.New(database)

	// Handlers
	choreHandler := chores.NewChoreHandler(app)
	userHandler := users.NewUserHandler(app)

	// Fiber instance
	server := fiber.New()
	server.Use(logger.New())
	server.Use(requestid.New())
	apiGroup := server.Group("/api")

	// Routes
	router := routes.NewRouter(apiGroup, choreHandler, userHandler)
	router.RouteChores()
	router.RouteUsers()

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		<-c
		log.Println("Gracefully shutting server down....")
		_ = server.Shutdown()
	}()

	if err := server.Listen(":8080"); err != nil {
		log.Panic(err)
	}

	log.Println("Server has been shutdown")
}
