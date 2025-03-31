class Node:
  def __init__(self, val,next =None):
    self.val=val
    self.next = next 


def display(head):
  while head :
    print(head.val ,end=" -> ")
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
def middleLLBrute(head):
  if not head :
    return head 
  temp= head 
  count = 0 
  while temp :
    count +=1
    temp=temp.next 
  count =count //2+1
  c =0
  temp=head 
  while temp :
    c +=1
    if c==count :
      return temp 
    temp=temp.next 
  #time is n + n//2+1

#algo is called TORTOISE AND HARE 
def middleLLOptimal(head):
  if not head or not head.next :
    return head 
  slow = fast = head 
  
  while fast and  fast.next :#better will be while fast !=None and fast.next !=None 
    slow= slow.next 
    fast = fast.next.next 
  return slow 
  #if fast becomes None at the end then LL was of even len
  #else fast becomes last node of LL then LL was of odd len 
  #time is approx n//2 +1 and space is 1 



  



arr = [1,2,3,4,5,6]
head = LL_from_arr(arr)
display(head)
h =middleLLOptimal(head)
display(h) 


