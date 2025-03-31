class Node :
  def __init__(self,data ,next =None ):
    self.data = data 
    self.next = next  

# NOTE -- I used nrml func rather than class methods why ? because in actual coding test , u will be given a head of the list and asked to return the head after perfomring all action being asked on THAT Linked List 

def makeLLFromArr(   arr):
    if len(arr)==0 :
      head = None 
      return head 
    head = Node(arr[0])
    temp= head 
    for i in range(1,len(arr)):
      node = Node(arr[i])
      temp.next= node  #connected 
      temp= temp.next  #moved 
    return head 



def display(head ):
    temp= head 
    while temp :
      print(temp.data,end=" -> ")
      temp= temp.next 
    print(None)

def lengthLL(head ):
    temp= head 
    count=0
    while temp:
      count=count+1
      temp=temp.next 
    return count 
def search(head,key):
    temp = head 
    while temp :
          if  temp.data == key :
            return True
          temp=temp.next 
    return False  
def remove_head(head):
    
    if not head :
      return None 
    head = head.next 
    return head 
  
def remove_tail(head):
    temp= head 
    if not temp or not temp.next : #here covered when LL is empty OR  head is the tail so we removed that and returned None 
      return None 
    prev =None 
    while temp.next :# so that we stopped one before last ele  
      prev = temp 
      temp=temp.next 
    prev.next = temp=  None  #again setting temp to None for dereferecing the last initial TAIL 
    return head 
def delete_kth_ele(head, k):
  temp = head 
  count =0
  prev = None 
  while  temp : 
    count=count+1
    if count ==1 and k==1 : #deleting head 
      head = head.next 
      return head 
    elif count == k :
      prev.next = temp.next 
      # temp=None   Not imp as due to prev above  line , only temp as a temporary pointer is pointing to that node and when function ends that temp will be gone and hence garbage collectore will del that NODE AUTOMATICALLY
      return head 
    prev = temp
    temp=temp.next 

  return head 
#time is min(k , LLlength)


def delete_ele_by_key(head ,key):
  if not head :
    return head 
  if head.data == key :
    head = head.next 
    return head
  temp=head 
  prev = None 
  while temp :
    if temp.data == key :
      prev.next = temp.next 
      return head 
    prev= temp 
    temp=temp.next
  return head 

def insert_at_start(head,val):
  # temp = Node(val) 
  # temp.next  = head 
  # return temp 
  return Node(val,head)

def insert_at_end(head , val):
  if not head : 
    return   Node(val)

  temp= head   
  while temp.next : #when u see this cond in while loop ...then remind one thing at the end temp will be at tail 
    temp=temp.next
  temp.next=Node(val)
  return head 

def insert_at_kth_position(head,val,k):
  #k range [1,LL.length+1]
 
  if k==1 :
    if not head :
      return Node(val)
    else :
      return Node(val,head)

  prev = None 
  count=0
  temp=head 
  #this loop is perfect when k is >=2 as prev needs to be at node 
  while temp :
    count =count+1
    if count == k :
      prev.next = Node(val,temp)
      break
    prev = temp
    temp=temp.next 
  if count+1==k :
    prev.next = Node(val)
  return head 
#time is LL.length and space is 1 

def insert_before_NodeVal(head,val,NodeVal ):
  #place a node before a node having dataas NodeVal ,given that node already exist for sure 
  if not head :
    return head 
  if head.data==NodeVal :
    return Node(val,head)
  temp = head 
  while temp.next :
    if temp.next.data == NodeVal:
      temp.next = Node(val,temp.next)
      break
    temp=temp.next 
  return head 





arr = [1,2,3,4,5]

head =makeLLFromArr(arr)
display(head)



display(h)

  



# one of the great q https://leetcode.com/problems/delete-node-in-a-linked-list/description/