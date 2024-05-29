function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++)
    {
      const a = array[i];
      for (let j = (i + 1); j < array.length; j++)
        {
          const b = array[j];
          if ((a + b) === targetSum)
            return [a, b];
        }
    }

  return []
}
