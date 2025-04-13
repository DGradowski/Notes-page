
// preferowane
if if ((GPIO_ReadValue(0) & (1 << 3)) == 0) {
    // niski sygnał
} else {
    // wysoki sygnał
}

if (((GPIO_ReadValue(0) >> 3) & 0x01) == 0) {
    // niski sygnał
} else {
    // wysoki sygnał
}

if if ((GPIO_ReadValue(0) & 8) == 0) {
    // niski sygnał
} else {
    // wysoki sygnał
}
