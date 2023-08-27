#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char findTheDifference(char * s, char * t){
    size_t letterCount[26] = {0};
    size_t sLen = 0;
    size_t tLen = 0;
    size_t i = 0;

    if (!s || !t)
    {
        return '\0';
    }

    sLen = strlen(s);
    tLen = strlen(t);

    for (i = 0; i < sLen; i++)
    {
        letterCount[*(s + i) - 'a']++;
    }

    for (i = 0; i < tLen; i++)
    {
        letterCount[*(t + i) - 'a']--;
    }

    for (i = 0; i < sizeof(letterCount); i++)
    {
        if (letterCount[i])
        {
            return 'a' + i;
        }
    }

    return '\0';
}

#if 0
int main(void)
{
    char *s = "";
    char *t = "y";

    printf("%c\n", findTheDifference(s, t));

    return 0;
}
#endif