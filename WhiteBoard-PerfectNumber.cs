using System;

namespace Numbers
{
  public class Program
  {
    System.Console.Write("Enter number: ");
    int number = int.Parse(Console.Readline());
    public bool isPerfectNumber(int number)
    {
      int sum = 0;
      for (int i=1; i < number; i++)
      {
        if (sum == number)
        {
          return true;
        }
        else if (sum > number)
        {
          return false;
        }
        sum += i;
        System.Console.WriteLine("sum is "+ sum);
      }
    }
  }
}