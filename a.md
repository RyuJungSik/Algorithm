- 질문할때 여러가지 후보들중 고른것과 고른이유도 설명해주면 좋다.
- View가 도메인 객체를 생성해주는것은 괜찮다.
    - 도멘인 객체가 View모델을 의존하는것은 객체지향에 위배될 수 있지만 그 반대는 괜찮다.
- ObjectMapper 객체는 한번 만들어 놓으면 여러번 사용 가능하다.
- 미리 널을 생성해놓고 아래에서 사용하는 패턴 사용하지 않기(베스트 프락티스 기억하기)
    
    ```java
    ItemsDTO itemsDTO = null;
      try {
          itemsDTO = objectMapper.readValue(configInputStream, ItemsDTO.class);
      } catch (IOException e) {
          e.printStackTrace();
      }
      return itemsDTO;
    ```
    
    - 이런경우 위에서 null로 생성해놓는것이 아닌
    
    ```java
      try {
          return objectMapper.readValue(configInputStream, ItemsDTO.class);
      } catch (IOException e) {
          e.printStackTrace();
      }
      
      throw new RuntimeExcpetion("")
    ```
    
    - 와 같은 형식으로 생각하자
- 객체의 멤버변수와 메소드 파라미터 중 어느것으로 변수를 받아야할지 기준에 따라 잘선택하기
    - 특정 메소드를 사용할때 재료는 파라미터로 받지 멤버변수로 받지는 않는다.
    - 멤버변수는 해당 로직을 사용할때(객체의 컨셉에 맞는) 개념적인 값을 보유한다.
    - 예시)
    
    ```java
    public class ItemsDtoParser {
        private final ItemsDTO itemsDTO;
        
         public Items createItems() {\
    	     ...
         
         }
    ```
    
    - 일때  itemsDTO는 멤버변수가 아닌 재료이므로 파라미터 좀더 적합하다.
- reduce() 사용시 서로다른 타입의 객체이면 먼저 통일시키고 reduce를 사용하는게 좀더 쉽다.
- StandardCharsets.*UTF_8는 매직상수라기보단 이미 그대로 사용이 가능한 객체이다.*
- 스트림 사용시
    - 인코딩, 디코딩
    - 버퍼처리
    - 자원의 해제
    - → 3요소 이해하고 잘 적용하기
    - 자원의 해제시 Closeable구현해서 close 메소드 구현해줘야한다.
        - try -with -resource 사용 필수.
-
