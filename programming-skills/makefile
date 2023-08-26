SOURCES = $(wildcard ./*.c)
TARGET = a.out
CFLAGS = -O0 -g -Wall -Wextra

$(TARGET): $(SOURCES)
	gcc $(SOURCES) $(CFLAGS) -o $(TARGET)
clean:
	rm -rf a.out