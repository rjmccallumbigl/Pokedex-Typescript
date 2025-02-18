"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// if container is not of type HTMLElement, TypeScript will check again if the value is equal to the type after the pipe (|) symbol
var container = document.getElementById("app");
var pokemons = 100;
// allows us to loop through the number of pokemon to retrieve and for each object call getPokemon with the pokemon number
var fetchData = function () {
    for (var i = 1; i <= pokemons; i++) {
        getPokemon(i);
    }
};
// It may take time to fetch data, hence we use an asynchronous function that returns a Promise of type void. 
// This last means that the function won't return a value.
var getPokemon = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var data, pokemon, pokemonType, transformedPokemon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/" + id)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                pokemon = _a.sent();
                pokemonType = pokemon.types
                    .map(function (poke) { return poke.type.name; })
                    .join(", ");
                transformedPokemon = {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: "" + pokemon.sprites.front_default,
                    type: pokemonType,
                };
                showPokemon(transformedPokemon);
                return [2 /*return*/];
        }
    });
}); };
// Receives as a parameter the pokemon object of type IPokemon and returns void or no value 
var showPokemon = function (pokemon) {
    var output = "\n\t\t  <div class=\"card\">\n\t\t\t  <span class=\"card--id\">#" + pokemon.id + "</span>\n\t\t\t  <img class=\"card--image\" src=" + pokemon.image + " alt=" + pokemon.name + " />\n\t\t\t  <h1 class=\"card--name\">" + pokemon.name + "</h1>\n\t\t\t  <span class=\"card--details\">" + pokemon.type + "</span>\n\t\t  </div>\n\t  ";
    container.innerHTML += output;
};
fetchData();
