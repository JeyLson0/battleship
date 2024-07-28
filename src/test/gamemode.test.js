import Gamemode from '../scripts/gamemode';

let mockButtonInput = jest.fn();
mockButtonInput.mockReturnValue('pvp');
mockButtonInput.mockReturnValueOnce('pve');

describe('Game mode', () => {
  let game = new Gamemode();

  let mockClickEvent = jest.fn(input => {
    game.mode = input;
  });

  it('game mode is player vs player', () => {
    mockClickEvent(mockButtonInput());
    expect(game.mode).toBe('pve');
  });

  it('game mode is player vs computer)', () => {
    mockClickEvent(mockButtonInput());
    expect(game.mode).toBe('pvp');
  });
});

// clicking a button from the modal starts the game mode.
