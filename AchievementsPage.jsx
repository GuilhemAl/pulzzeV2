import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { achievements as mockAchievements, userStats as mockStats } from '../mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { ArrowLeft, Trophy, Clock, Lightbulb, Target } from 'lucide-react';

const AchievementsPage = () => {
  const navigate = useNavigate();
  const [achievements] = useState(mockAchievements);
  const [userStats] = useState(mockStats);

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalAchievements = achievements.length;
  const progressPercent = (unlockedCount / totalAchievements) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Puzzles
            </Button>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="text-xl font-bold">{unlockedCount}/{totalAchievements}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
          <CardHeader>
            <CardTitle className="text-3xl">Your Achievements</CardTitle>
            <CardDescription className="text-emerald-50">
              Keep playing to unlock more!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span>
                <span className="font-bold">{Math.round(progressPercent)}%</span>
              </div>
              <Progress value={progressPercent} className="h-3 bg-white/30" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">{userStats.puzzlesCompleted}</p>
                <p className="text-sm text-emerald-100">Puzzles Completed</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">{Math.floor(userStats.totalTime / 60)}m</p>
                <p className="text-sm text-emerald-100">Total Time</p>
              </div>
              <div className="text-center">
                <Lightbulb className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">{userStats.hintsUsed}</p>
                <p className="text-sm text-emerald-100">Hints Used</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">All Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id}
                className={`transition-all duration-300 ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-300 shadow-lg' 
                    : 'bg-gray-50 opacity-60'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`text-4xl ${
                        achievement.unlocked ? 'animate-bounce' : 'grayscale'
                      }`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </div>
                    </div>
                    {achievement.unlocked && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500">
                        Unlocked
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-8 text-center">
          <CardContent className="py-8">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-2xl font-bold mb-2">Keep Going!</h3>
            <p className="text-gray-600 mb-4">
              Complete more puzzles to unlock all achievements
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
            >
              Play More Puzzles
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AchievementsPage;