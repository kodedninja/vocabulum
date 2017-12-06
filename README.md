# vocabulum
A vocabulary building application

Vocabulum is built to help in constructing artificial languages. It also lets you work on a language with other people, by using ```git``` for the saved JSON file.

## Command
#### ```WORD```
Adds a new word

Syntax: ```WORD [PART OF SPEECH] [word] = [meaning]```

Example: ```WORD NOUN leda = woman```

#### ```DELETE```
Deletes a word

Syntax: ```DELETE [word]```

Example: ```DELETE leda```

#### ```SYN/SYNONYM```
Adds a synonym to a word and to every other synonyms

Syntax: ```SYN [word] + [synonym]```

Example: ```SYN leda + nona```

#### ```FIND```
Shows only the ```word``` or every word.

Syntax: ```FIND [word]``` or ```FIND``` to show every word

Example: ```FIND leda```

#### ```LANGS```
Set the name of the two languages you working with (the language you're working on/the base language).

Syntax: ```LANGS [newlang] [baselang]```

Example: ```LANGS konsol english```

#### ```SAVE```
Save the language. Same as ```Ctrl + s```.

#### ```OPEN```
Open a language file. Same as ```Ctrl + o```.
