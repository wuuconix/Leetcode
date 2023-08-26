#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *mergeAlternately(char *word1, char *word2)
{
    size_t i = 0;
    size_t word1Index = 0;
    size_t word2Index = 0;
    size_t word1Len = 0;
    size_t word2Len = 0;
    char *wordMerged = NULL;

    if (!word1 || !word2)
    {
        return NULL;
    }

    word1Len = strlen(word1);
    word2Len = strlen(word2);

    wordMerged = malloc(word1Len + word2Len + 1);
    if (!wordMerged)
    {
        return NULL;
    }

    /* 双指针最好用while */
    while (word1Index < word1Len || word2Index < word2Len)
    {
        if (word1Index < word1Len)
        {
            *(wordMerged + i) = *(word1 + word1Index);
            word1Index++;
            i++;
        }
        if (word2Index < word2Len)
        {
            *(wordMerged + i) = *(word2 + word2Index);
            word2Index++;
            i++;
        }
    }

    *(wordMerged + word1Len + word2Len) = '\0';

    return wordMerged;
}

#if 0
int main(void)
{
    char *word1 = "a";
    char *word2 = "p";

    char *wordMerged = mergeAlternately(word1, word2);
    printf("%s\n", wordMerged);

    return 0;
}
#endif