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


head = LL_from_arr([1])
head.next = head 
display(head)