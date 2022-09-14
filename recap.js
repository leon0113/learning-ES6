#include < stdio.h >
    #include < conio.h >

    void main()
{
    int i = 0, flag = 0;
    char keyword[10][10] = { "int", "float", "long", "string", "if", "else", "for", "while", "do", "break", "default"}, a[10];
    // input from the user
    printf("Enter the identifier:");
    gets(a);


    for (i = 0; i < 10; i++) {
        if ((strcmp(keyword[i], a) == 0)) {
            flag = 1;
        }
    }


    if (flag == 1) {
        printf("%s is a keyword", a);
    }
    else
        flag = 0;

    if ((a[0] == "_") || (isalpha(a[0]) != 0)) {
        for (i = 1; a[i] != '\0'; i++) {
            if ((isalnum(a[i]) == 0) && (a[i] != '_')) {
                flag = 1;
            }
        }
    }
    else {
        flag = 1;
    }

    if (flag == 0) {
        printf("\n %s is an identifier.", a);
    }
    else {
        printf("\n %s is not a valid identifier", a);
    }
    return 0;
}