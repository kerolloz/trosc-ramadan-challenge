"""
Solve the bug in the following code
"""


def printOdds(end):
  """
  this function prints the odd numbers in the range [1, end] 
  """
  for i in range(1, end, 2):
    print(i)


if __name__ == "__main__":
    printOdds(5) # should print numbers from 1 -> 5