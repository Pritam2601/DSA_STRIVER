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
def isPalindromeBrute(head):
  stack = deque()
  temp= head 
  count =0
  while temp :
    count+=1
    stack.append(temp.val)
    temp=temp.next 
  
  
  count = count //2
  temp=head
  while  count :
    count-=1
    if temp.val != stack.pop():
      return False 
    temp=temp.next 
  return True 
  #time is n + n//2 and space is n 
def rev(head):
  prev = None
  curr = head 
  while curr :
    front = curr.next 
    curr.next= prev

    prev = curr 
    curr=front 
  return prev

def findMiddle(head):
  prev = None 
  if not head  or not head.next :
    prev=head
    return prev 
  slow = fast = head 
  while fast !=None  and fast.next !=None:
    prev =slow 
    slow =slow.next 
    fast = fast.next.next 
  return prev 

def isPalindromeOptimal(head):
  if not head.next :
    return True 
  middle_Node = findMiddle(head)
  rev_head=  rev(middle_Node.next)
 
  middle_Node.next = None 
  
  temp  = head 
  while temp :
    if temp.val != rev_head.val :
      return False 
    temp=temp.next 
    rev_head=rev_head.next
  return True 
  # time is n//2+1)(for knowing the mid ) + n//2 (for rev ) + n//2-(odd ? 1 :0)  = approx 1.5 * n  
  #  and space is  1


arr=[1] 
head = LL_from_arr(arr)
display(head)
res= isPalindromeOptimal(head)
print(res)