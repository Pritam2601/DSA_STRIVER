class Node:
  def __init__(self,data,next=None):
    self.data=data
    self.next = None 
def display(head):
  while head :
    print(head.data ,end=" -> ")
    head = head.next 
  print(None)
def LL_from_arr(arr):
  if len(arr)==0 :
    return None 
  head = Node(arr[0])
  temp=head 
  for i in range(1,len(arr)):
    temp.next = Node(arr[i], None )
    temp= temp.next 
  return head 
def segregateBrute(head):
  two =one =zero =0
  temp=head 
  while temp :
    data = temp.data 
    if data == 0 :
      zero+=1
    elif data == 1 :
      one+=1
    else :
      two+=1
    temp=temp.next 
  temp= head 
  while temp :
    if zero :
      temp.data = 0 
      zero-=1
      
    elif one :
      temp.data = 1 
      one-=1
     
    else :
      temp.data =2 
      two -= 1

    temp= temp.next
  print([zero,one,two])
  return head
  #time is 2*n  and space is 1 

def segregateOptimal(head):
  l1_dummyNode ,l2_dummyNode,l3_dummyNode= Node(-1),Node(-1),Node(-1)
  l1 ,l2,l3= l1_dummyNode ,l2_dummyNode,l3_dummyNode
  temp = head 
  while temp :
    data= temp.data 
    front = temp.next 
    if data == 0 :
      l1.next = temp 
      l1= temp 
    elif data == 1 :
      l2.next = temp 
      l2= temp 
    else :
      l3.next = temp 
      l3=temp 
    temp= front 
  
 
  #connecting with each other 
  l2.next = l3_dummyNode.next 
  l1.next = l2_dummyNode.next 
  l3.next = None 
  return l1_dummyNode.next 
  #time is n and space is 1 

# arr = [2,0] --special test case 
#why SPECIAL ? 
#ans is 
# l1.next = l2_dummyNode.next 
# l2.next = l3_dummyNode.next 

arr = [2,0]

head= LL_from_arr(arr)f
display(head)
h = segregateOptimal(head)
display(h)