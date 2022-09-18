function LinkedList() { 
       // var length = 0; 
       var head = null; 
       var lastNode=null;

     
     
       var Node = function(element){
         this.element = element; 
         this.next = null; 
       }; 
     
       // this.size = function(){
       //   return length;
       // };
     
       this.head = function(){
         return head;
       };
       
       this.lastNode=function(){
              return lastNode;
       }
     
       this.add = function(element){
         var node = new Node(element);
         if(head === null ){
             head = node;
             lastNode=head;
         } else {
       //       var currentNode = head;
     
       //       while(currentNode.next!==null){
       //           currentNode  = currentNode.next;
       //       }
     
             lastNode.next = node;
             lastNode=node;
         }
     
       //   length++;
       }; 
       this.print=function(){
              var curr_node=head;
              var s="";
              while(curr_node){
                     // console.log(curr_node.element);
                     s+=curr_node.element+" -> ";
                     curr_node=curr_node.next;
              }
              console.log(s+=null);
       }

}

var linked=new LinkedList();
linked.add('1');
linked.add('2');
linked.add('3');
linked.add('4');
linked.print();
