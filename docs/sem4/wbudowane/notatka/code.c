if ((GPIO_ReadValue(0) & (1 << 4)) == 0) {
    // przycisk wciśnięty
} else {
    // przycisk nie wciśnięty
}

if ((GPIO_ReadValue(0) & (1 << 4)) > 0) {
    // przycisk nie wciśnięty
} else {
    // przycisk wciśnięty
}
