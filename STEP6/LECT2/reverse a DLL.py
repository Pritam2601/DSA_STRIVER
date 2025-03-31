
from collections import deque



class Node :
  def __init__(self,data, next=None , back =None ):
    self.data = data 
    self.next = next 
    self.back = back 


def display(head):
  print(None,end=" <-> ")
  while head :
    print(head.data ,end=" <-> ")
    head = head.next 
  print(None)
def DLL_from_arr(arr):
  if len(arr)==0 :
    return None 
  head = Node(arr[0])
  temp=head 
  for i in range(1,len(arr)):
    temp.next = Node(arr[i], None , temp)
    temp= temp.next 
  return head 
def revDLLBrute(head):
  stack = deque()  # Create an empty stack
  temp= head 
  while temp :
    stack.append(temp.data)
    temp=temp.next 
  temp= head 
  while temp :
    temp.data = stack.pop()#return the top and del that top as WELL 
    temp=temp.next 
  return head 
  #time is 2 * n and space is n 


def revDLLOptimal(head):
  #change the direction of each node 
  curr=head 
  prev = None 
  while curr :
    prev = curr.back 
    curr.back = curr.next 
    curr.next = prev 

    curr= curr.back  
 
  return  prev.back
#time is n and space is 1 




arr = [2,1,3,4]
head = DLL_from_arr(arr)
display(head)

h = revDLLOptimal(head)
display(h)

