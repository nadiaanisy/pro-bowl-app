import {
	Calendar,
	LoaderPinwheel,
	Menu,
	Star,
	Trophy,
	Users,
	X
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DesktopLanguageSwitcher from '../../functions/DesktopLanguageSwitcher';

export default function LandingPage() {
	const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { t, i18n } = useTranslation();

  const openLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  const openRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-40 border-b border-white/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <LoaderPinwheel className="text-white" size={24} />
              </div>
              <span className="text-white text-xl">{t('TITLE')}</span>
            </div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">{t('NAVIGATION.FEATURES')}</a>
              {/* <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <button
                // onClick={openLogin}
                className="text-white/80 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button
                // onClick={openRegister}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </button> */}
              <DesktopLanguageSwitcher />
            </div>

						{/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <DesktopLanguageSwitcher />

              <button
                className="text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
					</div>
				</div>

				{/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-white/80 hover:text-white transition-colors py-2">{t('NAVIGATION.FEATURES')}</a>
              {/* <a href="#about" className="block text-white/80 hover:text-white transition-colors py-2">About</a>
              <a href="#pricing" className="block text-white/80 hover:text-white transition-colors py-2">Pricing</a>
              <button
                // onClick={openLogin}
                className="block w-full text-left text-white/80 hover:text-white transition-colors py-2"
              >
                Sign In
              </button>
              <button
                // onClick={openRegister}
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </button> */}
            </div>
          </div>
        )}
			</nav>

			{/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl">
                {t('LANDING_PAGE.HEADER_1')}{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t('LANDING_PAGE.HEADER_2')}
                </span>{' '}
                {t('LANDING_PAGE.HEADER_3')}
              </h1>
              <p className="text-xl text-white/70">
                {t('LANDING_PAGE.DESCRIPTION')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={openRegister}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
                >
                  {t('BUTTONS.START_TRACKING_NOW')}
                </button>
                <button
                  onClick={openLogin}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
                >
                  {t('BUTTONS.SIGN_IN')}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1763819527452-f01bfb155013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3dsaW5nJTIwYWxsZXklMjBtb2Rlcm58ZW58MXx8fHwxNzc3NDkwODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern bowling alley"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-white mb-4">
              {t('LANDING_PAGE.FEATURES_TITLE')}
            </h2>
            <p className="text-xl text-white/70">
              {t('LANDING_PAGE.FEATURES_DESCRIPTION')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="text-xl text-white mb-2">{t('LANDING_PAGE.FEATURE_1_TITLE')}</h3>
              <p className="text-white/70">
                {t('LANDING_PAGE.FEATURE_1_DESC')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-xl text-white mb-2">{t('LANDING_PAGE.FEATURE_2_TITLE')}</h3>
              <p className="text-white/70">
                {t('LANDING_PAGE.FEATURE_2_DESC')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl text-white mb-2">50K+</div>
              <div className="text-white/70">Active Bowlers</div>
            </div>
            <div>
              <div className="text-5xl text-white mb-2">200+</div>
              <div className="text-white/70">Partner Alleys</div>
            </div>
            <div>
              <div className="text-5xl text-white mb-2">1M+</div>
              <div className="text-white/70">Games Played</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            {t('LANDING_PAGE.CTA_TITLE')}
          </h2>
          <p className="text-xl text-white/70 mb-8">
            {t('LANDING_PAGE.CTA_DESC')}
          </p>
          <button
            onClick={openRegister}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            {t('BUTTONS.GET_STARTED')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-white/60">
          <p>&copy; 2026 ProBowlApp. All rights reserved.</p>
        </div>
      </footer>

      {/* Modals */}
      {/* <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToRegister={openRegister}
      />
      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onSwitchToLogin={openLogin}
      /> */}
    </div>
	);
};