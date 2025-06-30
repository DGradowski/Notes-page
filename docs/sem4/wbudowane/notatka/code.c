void oled_init (void)
{
    int i = 0;

    // Ustawianie kierunków pinów na wyjście
    GPIO_SetDir(2, (1<<1), 1); // Zasilanie wyświetlacza
    GPIO_SetDir(2, (1<<7), 1); // Data/Command
    GPIO_SetDir(0, (1<<6), 1); // Chip Select

    /* make sure power is off */
    GPIO_ClearValue( 2, (1<<1) );

    OLED_CS_OFF(); // to samo co GPIO_SetValue( 0, (1<<6) )

    runInitSequence();

    memset(shadowFB, 0, SHADOW_FB_SIZE);

    /* small delay before turning on power */
    for (i = 0; i < 0xffff; i++);

     /* power on */
    GPIO_SetValue( 2, (1<<1) );
}