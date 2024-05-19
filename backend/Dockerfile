FROM golang:1.20-alpine3.17 as builder

COPY go.mod go.sum /build/
WORKDIR /build
RUN go mod download

COPY . /build
ENV GOCACHE=/tmp/.cache/go-build
RUN --mount=type=cache,target=${GOCACHE} go build -o svr main.go

FROM alpine:3.17

COPY --from=builder /build/svr /app/
WORKDIR /app

EXPOSE 8080

ENTRYPOINT [ "./svr" ]
