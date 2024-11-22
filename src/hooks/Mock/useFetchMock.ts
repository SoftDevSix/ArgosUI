export const useFetchMock = () => {
    const mockData = [
      ["/*", "This", "source", "file", "was", "generated", "by", "the", "Gradle", "'init'", "task", "*/"],
      ["package", "org.example;"],
      ["import", "org.junit.Test;"],
      ["import", "static", "org.junit.Assert.*;"],
      ["public", "class", "AppTest", "{"],
      ["@Test", "public", "void", "appHasAGreeting()", "{"],
      ["App", "classUnderTest", "=", "new", "App();"],
      [
        "assertNotNull",
        "(",
        "\"app",
        "should",
        "have",
        "a",
        "greeting\",",
        "classUnderTest.getGreeting()",
        ");",
      ],
      ["}"],
      ["@Test", "public", "void", "appGreetingMessage()", "{"],
      ["App", "app", "=", "new", "App();"],
      [
        "assertEquals",
        "(",
        "\"Hello",
        "World!\",",
        "app.getGreeting()",
        ");",
      ],
      ["}"],
      ["}"],
    ];
  
    return mockData;
  };
  