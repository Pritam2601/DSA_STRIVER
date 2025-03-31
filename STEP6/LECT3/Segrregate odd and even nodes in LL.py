class Node:
  def __init__(self,val,next=None):
    self.val=val
    self.next = None 
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
def oddEvenListBrute(head):
  if not head :
    return head 
  arr=[]
  temp= head 
  #1 3  5    1 3 5 7
  while temp :
    arr.append(temp.val)
    if not temp.next :
      break 
    temp=temp.next.next 
  temp=head.next 
  while temp:
    arr.append(temp.val)
    if not temp.next :
      break 
    temp=temp.next.next 
  temp=head 
  i=0
  while temp :
    temp.val = arr[i]
    temp=temp.next 
    i+=1
  return head 

#time is 2*n and space is 1 


def oddEvenListOptimal(head):
  odd_dummyNode = Node(-1)
  even_dummyNode = Node(-1)
  odd,even = odd_dummyNode,even_dummyNode
  count =0
  temp= head 
  while temp:
    count+=1
    front = temp.next 
    if count %2==1:
      
      odd.next = temp #connected the LINK 
      odd= temp #moved to the newly added NODE 
      odd.next = None  #DELINKED connection with  the rest of NODE 
     
    else :
      even.next = temp
      even = temp 
      even.next = None 
    temp = front  
  
  odd.next = even_dummyNode.next
  return odd_dummyNode.next
  #time is n and space is 1 





arr=[]
head = LL_from_arr(arr)
display(head)
h= oddEvenListBrute(head)
display(h)