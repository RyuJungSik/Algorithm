class Node{
    constructor(value='', count=0){
      this.value = value
      this.count = count
      this.child = {}
      this.end = false
    }
  }
  
  class Trie{
    constructor(){
      this.root = new Node()
    }
    
    insert(string){
      let currentNode = this.root
      currentNode.count++ 
      // root에도 count++를 해주어야 "?????"같은 가사가 들어왔을 때 제대로된 count 반환 가능 
      for(var i=0; i<string.length; i++){
        let currentChar = string[i]
        if(currentNode.child[currentChar] === undefined){
          currentNode.child[currentChar] = new Node(currentNode.value + currentChar, 0)
        }
        currentNode = currentNode.child[currentChar]
        currentNode.count++ // 문자열이 삽입될 때마다 count++
      }
      currentNode.end = true
    }
     
    search(string){
      let currentNode = this.root
      for(var i=0; i<string.length; i++){
        let currentChar = string[i]
        if(currentNode.child[currentChar]){
          currentNode =  currentNode.child[currentChar]
        } else {
          return 0 // 자식 없으면 0 리턴 
        }
      }
      return currentNode.count
    }
  }
  
  function solution(words, queries){
    var answer = []
    var array = new Array(100001).fill(0)
    // 트라이를 저장할 배열 
    for(var i=1; i<=100001; i++){
      var pretrie = new Trie()
      var sutrie = new Trie()
      array[i] = [pretrie, sutrie]
      // "?"가 있는 위치에 따라 각각 다른 트리를 만들어 줌 
    }
    for(var i=0; i<words.length; i++){
      var ptr = words[i].length
      array[ptr][0].insert(words[i]) // "?"가 뒤에 있을 때 
      array[ptr][1].insert(words[i].split('').reverse().join('')) // "?"가 앞에 있을 때
      // 인덱스가 words[i]의 길이값인 곳에 단어 길이 i인 문자열만 삽입된 pretrie, sutrie를 만듦
    }
    
    for(var i=0; i<queries.length; i++){
      var len = queries[i].length
      var str = queries[i].split("?").join('')
      if(str.length === 0 || queries[i][0] !== "?"){ // queries[i]가 "????" or "fr???"와 같은 경우 
        var ans = array[len][0].search(str)
        // 가사 길이랑 같은 단어들로 구성된 트라이에서 찾기 
        answer.push(ans)
      } else { // queries[i]가 "???do"와 같은 경우 
        var ans = array[len][1].search([...str].reverse().join(''))
        // 가사 길이랑 같은 단어들로 구성된 트라이에서 찾되, 역순으로 찾기 
        answer.push(ans)
      }
    }
    return answer
  }