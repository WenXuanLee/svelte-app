import { writable } from 'svelte/store';
import { generateRandomColors, pickUpColor } from '../utils/colorUtils';

const defaultRandomColorSets = generateRandomColors(6);
const defaultPickedUpcolor = pickUpColor(defaultRandomColorSets)
export const mode = writable('Hard');
export const colorSets = writable(defaultRandomColorSets);
export const pickedColor = writable(defaultPickedUpcolor);
export const isGameEnd = writable(false);
