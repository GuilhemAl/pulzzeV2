import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { puzzleLibrary } from '../mockData';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { ArrowLeft, Lightbulb, RefreshCw, Clock, Target, Sparkles } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const PuzzlePage = () => {
  const { puzzleId } = useParams();
  const navigate = useNavigate();
  const puzzle = puzzleLibrary.find(p => p.id === puzzleId);
  
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showEcoFact, setShowEcoFact] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [placedPieces, setPlacedPieces] = useState(0);

  // Timer
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleHint = () => {
    setHintsUsed(prev => prev + 1);
    toast({
      title: "Hint! 💡",
      description: "Look for corner and edge pieces first!",
    });
  };

  const simulatePiecePlacement = () => {
    if (placedPieces < puzzle.pieces) {
      const newPlaced = placedPieces + 1;
      setPlacedPieces(newPlaced);
      const newProgress = (newPlaced / puzzle.pieces) * 100;
      setProgress(newProgress);
      
      // Show eco-fact at 50% progress
      if (newProgress >= 50 && newProgress < 52 && !showEcoFact) {
        setShowEcoFact(true);
      }
      
      // Complete puzzle
      if (newPlaced === puzzle.pieces) {
        setIsRunning(false);
        setTimeout(() => setShowCompletion(true), 500);
      }
    }
  };

  const handleReset = () => {
    setElapsedTime(0);
    setProgress(0);
    setPlacedPieces(0);
    setHintsUsed(0);
    setIsRunning(true);
    setShowEcoFact(false);
    setShowCompletion(false);
  };

  if (!puzzle) {
    return <div>Puzzle not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span>{formatTime(elapsedTime)}</span>
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Target className="w-5 h-5 text-teal-600" />
                <span>{placedPieces}/{puzzle.pieces}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Puzzle Area */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                <CardTitle className="text-2xl">{puzzle.title}</CardTitle>
                <CardDescription className="text-emerald-50">
                  {puzzle.theme} • {puzzle.pieces} pieces
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Progress</span>
                    <span className="font-bold text-emerald-600">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                </div>

                {/* Puzzle Canvas */}
                <div 
                  className="relative bg-gray-100 rounded-lg border-4 border-dashed border-gray-300 aspect-video flex items-center justify-center cursor-pointer hover:border-emerald-400 transition-colors"
                  onClick={simulatePiecePlacement}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ 
                      backgroundImage: `url(${puzzle.image})`,
                      opacity: progress / 100,
                      filter: `blur(${Math.max(0, 8 - (progress / 12.5))}px)`
                    }}
                  />
                  {progress < 100 && (
                    <div className="relative z-10 text-center">
                      <Sparkles className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-pulse" />
                      <p className="text-lg font-semibold text-gray-700">Click to place puzzle pieces!</p>
                      <p className="text-sm text-gray-500 mt-2">({puzzle.pieces - placedPieces} pieces remaining)</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-4">
            {/* Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={handleHint} 
                  className="w-full bg-yellow-500 hover:bg-yellow-600"
                  disabled={!isRunning}
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Hint ({hintsUsed})
                </Button>
                <Button 
                  onClick={handleReset} 
                  variant="outline" 
                  className="w-full"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reference Image</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={puzzle.image} 
                  alt="Reference"
                  className="w-full rounded-lg border-2 border-gray-200"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Eco-Fact Dialog */}
      <Dialog open={showEcoFact} onOpenChange={setShowEcoFact}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <span>🌍</span> Eco-Fact!
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              {puzzle.ecoFact}
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowEcoFact(false)} className="bg-gradient-to-r from-emerald-500 to-teal-500">
            Keep Puzzling!
          </Button>
        </DialogContent>
      </Dialog>

      {/* Completion Dialog */}
      <Dialog open={showCompletion} onOpenChange={setShowCompletion}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-3xl text-center">
              🎉 Puzzle Complete! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <img 
              src={puzzle.image} 
              alt="Completed"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4 text-left bg-gray-50 p-4 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="text-xl font-bold text-emerald-600">{formatTime(elapsedTime)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Hints Used</p>
                <p className="text-xl font-bold text-teal-600">{hintsUsed}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => navigate('/')} 
                variant="outline"
                className="flex-1"
              >
                Home
              </Button>
              <Button 
                onClick={handleReset}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500"
              >
                Play Again
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PuzzlePage;