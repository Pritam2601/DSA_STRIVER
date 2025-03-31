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

def removeNthFromEndBrute(head,n):
  c=0
  t=head
  while t :
    c +=1
    t=t.next
  skip = c-n 
  if not skip :
    return head.next 
  c=0
  t=head 
  while t:
    c+=1
    if skip == c :
      t.next = t.next.next 
      break
    t=t.next
  return head 
#time is approx 2*n and space is 1 
def removeNthFromEndOptimal(head,n):
  fast = head 
  while n :
    n-=1
    fast=fast.next 
  if not fast :
    return head.next 
  slow = head 
  while fast.next :
    fast=fast.next 
    slow=slow.next 
  slow.next = slow.next.next 
  return head 
#time is n ans space is 1 

arr=[1,2,3,4,5]  
n = 4
head = LL_from_arr(arr)
display(head)
h = removeNthFromEndOptimal(head,n)
display(h)