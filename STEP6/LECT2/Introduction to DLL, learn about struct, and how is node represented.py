class Node :
  def __init__(self,data,next=None,back=None):
    self.data = data 
    self.next = next 
    self.back =  back 
 

def DLL_from_arr(arr):
  if len(arr)==0:
    return None 
  head = Node(arr[0])
  prev = head 
  for i in range(1,len(arr)):
    #         = connection of curr node with back AND WHOLE LINE is connetion of prev and curr
    prev.next = Node(arr[i],None , prev)
    prev = prev.next 

  return head 

def display(head):
  temp=head 
  print(None , end=" <-> ")
  while temp :
    print(temp.data , end=" <-> ")
    temp=temp.next 
  print(None)
  return head

#NOW SAME FORMAT FOR DLL TOO - 8 more FUNCTION 
# DELETE -- [head , tail , kth position , node] == 4 
# INSERT --  [before head , after tail ,before kth position , before Given Node] == 4 
def del_head(head):
  if not head or not  head.next :# If list is empty or has only one node
    return None 

  head = head.next # Move head forward
  head.back = None # Disconnect old head 
  return head 


def del_tail(head):
  if not head or not head.next :
    return None 
  temp = head 
  while temp.next  :
    temp=temp.next 
  temp.back.next = None 
  # temp.back = None no need of this line .. a node which has been dereferenced is elgible for garbage collector 
  return head 

def del_kth_Node(head , k):
  #GIVEN range of k [1,DLL.length]
  #when SIZE is 0 
  if not head :
    return head 
  #handling when DLL size is 1 
  if not head.next :
    if k==1 :
      return None 
    else :
      return head 
  count=0
  temp = head 
  while temp :
    count=count+1
    # if count == 1 and k==1 :
    #   head = head.next 
    #   head.back = None 
    #   break 
    
    # if count == k :
    #   if not temp.next :
    #     temp.back.next = None 
    #     break
    #   else :
       
    #     prev = temp.back 
    #     front = temp.next 
    #     prev.next = front
    #     front.back = prev 
    #     break
    #my above code is also fine but see the way2 u will LOVE it 
    if count==k :
      break 
    temp=temp.next

  
  if not temp.prev :
    #means head 
    head = head.next 
    head.back = None 
    
  elif not temp.next :
    #means tail
    temp.back.next= None 

  else :
    #means between these 2 
    front = temp.next 
    prev = temp.back 
    prev.next  = front 
    front.back = prev 
  return head 

#this will not be asked but below the below one is asked as that is very easy 
#typically we  face c1 c2 
# c1 head is None OR head.next is None 
# c2 of 2.1 2.2 2.3 
def del_Node_by_Val(head,val):
  if not head :
    return None 
  temp = head 
  flag = False
  while temp :
    if temp.data == val :
      flag = True  
      break
    
    temp=temp.next 
  
  #covers a case when a node val is not found 
  if not temp :
    return head 
  front = temp.next 
  prev  = temp.back
  if not front and not prev :
    #means single node  and that is head 
    if flag :
      return None 
  
  elif not prev :
    #means head 
    if flag:
     head = head.next 
     head.back=None 
  elif not front :
    #means tail 
    prev.next = None  
    
  else :
    #means between head and tail 
    prev.next = front 
    front.back = prev 

  
  return head 

def del_Node(temp):
  #GIVEN THAT temp !=head 
  front = temp.next 
  prev = temp.back 
  if not  front  :
    prev.next = None 
    return 
  prev.next = front 
  front.back= prev 


#-----------------INSERTION 
def insert_before_head(head,val):
  new_Node =  Node(val , head )
  head.back =new_Node 
  return new_Node 

def insert_before_tail(head,val):
  if not head :
    return Node(val)
  if not head.next :
    new_Node=Node(val,head)
    head.back =new_Node 
    return new_Node 
  temp=head 
  while temp.next :
    temp=temp.next 
  
  prev = temp.back
  new_Node = Node(val,temp,prev)
  prev.next  =  new_Node
  temp.back = new_Node
  
  return  head 
      
def insert_before_kth_ele(head,val,k):
  if not head :
    if k==1 :
      return Node(val)
    else :
      return head 
  count =0
  temp = head 
  flag = False 
  while temp :
    count =count +1
    if count==k :
      flag = True
      break 
    temp=temp.next 
  if not flag :
    return head 
  prev = temp.back 
  if not prev  :
    new_Node = Node(val, temp)
    temp.back = new_Node 
    return new_Node 
  else :

    new_Node = Node(val, temp,prev)
    prev.next = new_Node 
    temp.back = new_Node 
  return head 

def insert_before_given_node(node ,val):
  #given node is not head 
 
  prev = node.back 
  new_Node = Node(val,node,prev)
  prev.next = new_Node
  node.back = new_Node 
arr=[1,2,3,4]
head = DLL_from_arr(arr)
display(head)
insert_before_given_node(head.next, 100)
display(head)




