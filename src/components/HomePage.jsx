import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { puzzleLibrary } from '../mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Play, Trophy, Leaf } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const difficultyColors = {
    easy: 'bg-green-500',
    medium: 'bg-yellow-500',
    hard: 'bg-red-500'
  };

  const filteredPuzzles = selectedDifficulty === 'all' 
    ? puzzleLibrary 
    : puzzleLibrary.filter(p => p.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-3 rounded-2xl">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  EcoPuzzle
                </h1>
                <p className="text-sm text-gray-600">Learn & Play for our Planet</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/achievements')}
              className="flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Achievements
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Eco-Adventure! 🌍
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solve puzzles, discover amazing eco-facts, and become an environmental hero!
          </p>
        </div>

        {/* Difficulty Filter */}
        <div className="flex justify-center gap-3 mb-8">
          <Button 
            variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedDifficulty('all')}
          >
            All Puzzles
          </Button>
          <Button 
            variant={selectedDifficulty === 'easy' ? 'default' : 'outline'}
            onClick={() => setSelectedDifficulty('easy')}
            className="bg-green-500 hover:bg-green-600"
          >
            Easy (50)
          </Button>
          <Button 
            variant={selectedDifficulty === 'medium' ? 'default' : 'outline'}
            onClick={() => setSelectedDifficulty('medium')}
            className="bg-yellow-500 hover:bg-yellow-600"
          >
            Medium (75)
          </Button>
          <Button 
            variant={selectedDifficulty === 'hard' ? 'default' : 'outline'}
            onClick={() => setSelectedDifficulty('hard')}
            className="bg-red-500 hover:bg-red-600"
          >
            Hard (100)
          </Button>
        </div>

        {/* Puzzle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPuzzles.map((puzzle) => (
            <Card 
              key={puzzle.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(`/puzzle/${puzzle.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={puzzle.image} 
                  alt={puzzle.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={`${difficultyColors[puzzle.difficulty]} text-white`}>
                    {puzzle.pieces} pieces
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {puzzle.title}
                  <Badge variant="outline" className="ml-2">{puzzle.theme}</Badge>
                </CardTitle>
                <CardDescription>{puzzle.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                  <Play className="w-4 h-4 mr-2" />
                  Start Puzzle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;