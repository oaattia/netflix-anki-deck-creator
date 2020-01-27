class Words {
    private words: Array<string> = [];

    public addWord(word: string): void{
        this.words.push(word);
    }

    public getWords(): Array<string> {
        return this.words;
    }
}


export function getSubtitle(sentence: string): Array<string> {
    let subWords: string[] = sentence.replace(/[^a-zA-Z ]/g, '').split(' ');
    let words = new Words();

    for (let i=0;  i < subWords.length; i++) {
        words.addWord(subWords[i]);
    }

    return words.getWords();
}