class Node:
  def __init__(self,val,next=None):
    self.val=val 
    self.next =next 
def LL_from_arr(arr):
  if len(arr)==0 :
    return None
  temp = head = Node(arr[0])
  for i in range(1,len(arr)):
    temp.next = Node(arr[i])
    temp=temp.next 
  return head 

  
def display(head):
  while head:
    print(head.val,end=" -> ")
    head = head.next 
  print(None)


def rev(head):
  prev = None 
  curr = head 
  while curr :
    front =curr.next 
    curr.next = prev 
    prev= curr
    curr=front 
  return prev 
def addOneBrute(head):
  temp= rev_head = rev(head)
  carry =1 
  while temp:
    sum = carry + temp.val 
    if sum == 10 :
      temp.val = 0 
      carry = 1 
    else :
      temp.val = sum 
      carry = 0 
      break 
    temp= temp.next 
  if carry :
   return  Node(carry, (rev_head) )
  return rev(rev_head)
#time is 2*n (for rev ) and n for running while loop == total 3 * n 
# space is 1   


#using RECURSION BACKTRACKING 
def recBcktrcking(head):
  #base case 
  if not  head :
    return 1  
  
  carry = recBcktrcking(head.next )
  head.val += carry 
  if head.val != 10 :
    return 0 
  head.val = 0 
  return  1 

def addOneOptimal(head):
  carry = recBcktrcking(head)
  # if carry == 0 :
  #   return head 
  # else :
  #   return Node(1,head)
  return Node(1,head) if carry == 1 else head 
  #time is n for traversal 
  #space is n for call stack 


arr =[9,9,9]
head = LL_from_arr(arr)
display(head)
h= addOneOptimal(head)
display(h)