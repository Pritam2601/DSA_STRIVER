from collections import deque

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
def reverseListBrute(head):
  stack = deque()
  temp= head 
  while temp:
    stack.append(temp.val)
    temp=temp.next 
  temp = head 
  while temp :
    temp.val = stack.pop()
    temp=temp.next 
  return head 
#time is 2*n and space is n
def reverseListOptimalIterative(head):
  prev = None 
  curr = temp 
  while curr :
    front = curr.next 
    curr.next =prev
    prev = curr 
    curr = front 
  return prev 
#time is n and space is 1 
def reverseListOptimalRecursive(head ,prev =None ):
  if not head :
    return  prev 
  front = head.next 
  head.next = prev
  prev = head 
  return  reverseListOptimalRecursive(front , prev )
#time is n+1 and space is n+1 if u consider cal stack 

arr=[1,2]
head = LL_from_arr(arr)
display(head)
h = reverseListOptimalRecursive(head)
display(h)